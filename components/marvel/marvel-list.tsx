import { Wrap } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { ECategory, IMarvel } from '@/modals';
import { getMarvel } from '@/services';
import { Loading } from '../common';
import { MarvelItem } from './marvel-item';

export interface IMarvelListProps {
  category: ECategory;
}

export function MarvelList({ category }: IMarvelListProps) {
  const { data, isLoading } = useQuery<IMarvel[]>({
    queryKey: ['marvel', category],
    queryFn: () => getMarvel(category),
    staleTime: Infinity,
  });


  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrap>
      {data?.map((item: IMarvel, index: number) => (
        <MarvelItem key={index} marvel={item} />
      ))}
    </Wrap>
  );
}
