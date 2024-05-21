import IGenericRepository from '../abstracts/IGenericRepository';
import { PrismaClient } from '@prisma/client';
import { WhereFilter } from './WhereType';
export default class GenericRepository<T> implements IGenericRepository<T> {
  constructor(private prismaClient: PrismaClient, private model: keyof PrismaClient) {}

  private getModel() {
    return this.prismaClient[this.model] as any;
  }

  async getAll(): Promise<T[]> {
    return this.getModel().findMany() as Promise<T[]>;
  }

  async get(filter: WhereFilter<T>): Promise<T | null> {
    return this.getModel().findUnique({ where: filter });
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    return this.getModel().create({ data: item }) as Promise<T>;
  }

  async update(id: number, item: T): Promise<T> {
    return this.getModel().update({
      where: { id },
      data: item,
    }) as Promise<T>;
  }

  async delete(id: number): Promise<T> {
    return this.getModel().delete({
      where: { id },
    }) as Promise<T>;
  }
}
