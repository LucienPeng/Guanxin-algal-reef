export interface ApiResponse<T> {
  code: number | null;
  msg: string | null;
  data: T;
};
