import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IResponse<T> {
  statusCode: number;
  message: string;
  data?: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponse<T>> {
    return next.handle().pipe(
      map(data => {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;

        let message = 'Request successful';
        if (statusCode === HttpStatus.CREATED) {
          message = 'Resource created successfully';
        } else if (statusCode === HttpStatus.NO_CONTENT) {
          message = 'No content';
        } else if (statusCode === HttpStatus.OK) {
          message = 'Request successful';
        }

        // Trả về phản hồi với cấu trúc dựa trên mã trạng thái
        return {
          statusCode,
          message,
          // Chỉ thêm 'data' nếu không phải là 204
          ...(statusCode !== HttpStatus.NO_CONTENT && { data }),
        };
      }),
    );
  }
}
