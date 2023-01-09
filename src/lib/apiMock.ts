import { rest } from 'msw';

export const apiMock = ({
  url,
  httpStatus,
  mockResponse,
}: {
  url: string;
  httpStatus: number;
  mockResponse: Record<string, any>;
}) => {
  return [
    rest.get(url, (req, res, ctx) => {
      return res(ctx.status(httpStatus), ctx.json(mockResponse));
    }),
  ];
};
