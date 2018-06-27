import { forIn } from 'lodash';

export interface Metadata {
  name: string;
  type: any;
}

export const getMetadata = (instance: object): Metadata[] => {
  const results: any = [];

  forIn(instance, (_: any, name: string) => {
    results.push({
      name,
      type: (Reflect as any).getMetadata('design:type', instance, name)
    });
  });

  return results;
};
