import { renderHook, waitFor } from '@testing-library/react';
import router from 'next/router';
import { setupServer } from 'msw/node';
import { queryClient, QueryWrapper } from '@/test/QueryWrapper';
import { API_ERROR_MESSAGES } from '@/constants/errorMessages';
import { apiMock } from '../../../../../lib/apiMock';
import { useFetchTodos } from '../useFetchTodos';

describe('useFetchTodos', () => {
  describe('success', () => {
    const mockResponse = {
      todoList: [
        {
          id: 1,
          todo: 'test1',
          status: 1,
        },
        {
          id: 2,
          todo: 'test2',
          status: 2,
        },
      ],
    };
    const server = setupServer(
      ...apiMock({
        url: '/api/v1/todos',
        httpStatus: 200,
        mockResponse,
      })
    );

    beforeAll(() => server.listen());

    afterEach(() => {
      server.resetHandlers();
      queryClient.clear();
    });

    afterAll(() => server.close());

    test('todoListを取得する', async () => {
      const { result } = renderHook(() => useFetchTodos(), {
        wrapper: QueryWrapper,
      });

      await waitFor(() =>
        expect(result.current.todoList).toEqual(mockResponse.todoList)
      );
    });
  });

  describe('failed', () => {
    window.alert = jest.fn();
    router.push = jest.fn();

    describe('500', () => {
      const mockResponse = {
        message: 'failed',
      };
      const server = setupServer(
        ...apiMock({
          url: '/api/v1/todos',
          httpStatus: 500,
          mockResponse,
        })
      );

      beforeAll(() => server.listen());

      afterEach(() => {
        server.resetHandlers();
      });

      afterAll(() => server.close());

      test('デフォルトエラーメッセージを表示する', async () => {
        const { result } = renderHook(() => useFetchTodos(), {
          wrapper: QueryWrapper,
        });

        await waitFor(() => expect(result.current.isError).toBe(true));
        expect(window.alert).toHaveBeenCalledWith(
          API_ERROR_MESSAGES.DEFAULT_ERROR
        );
      });
    });

    describe('401', () => {
      const mockResponse = {
        message: 'failed',
      };
      const server = setupServer(
        ...apiMock({
          url: '/api/v1/todos',
          httpStatus: 401,
          mockResponse,
        })
      );

      beforeAll(() => server.listen());

      afterEach(() => {
        server.resetHandlers();
      });

      afterAll(() => server.close());

      test('認証エラーメッセージを表示する', async () => {
        const { result } = renderHook(() => useFetchTodos(), {
          wrapper: QueryWrapper,
        });

        await waitFor(() => expect(result.current.isError).toBe(true));
        expect(window.alert).toHaveBeenCalledWith(
          API_ERROR_MESSAGES.UNAUTHORIZED
        );
        expect(router.push).toHaveBeenCalledWith('/sign_up');
      });
    });

    describe('Network Error', () => {
      test('ネットワークエラーメッセージを表示する', async () => {
        const { result } = renderHook(() => useFetchTodos(), {
          wrapper: QueryWrapper,
        });

        await waitFor(() => expect(result.current.isError).toBe(true));
        expect(window.alert).toHaveBeenCalledWith(
          API_ERROR_MESSAGES.NETWORK_ERROR
        );
      });
    });
  });
});
