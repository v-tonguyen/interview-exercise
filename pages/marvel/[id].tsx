import { Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { Loading } from '@/components/common';
import { MarvelDetailItem } from '@/components/marvel';
import { getMarvelDetail } from '@/services';
import { getURLQuery } from '@/utils';

const MarvelDetail = () => {
  const router = useRouter();
  
  const id = getURLQuery(router.query, 'id', '');

  const { data, isLoading } = useQuery({
    queryKey: ['marvelDetail', id],
    queryFn: () => getMarvelDetail(id),
    staleTime: 1000 * 60 * 1,
    cacheTime: 1000 * 60 * 2,
  });

  const renderHeader = () => (
    <Button onClick={() => router.back()} colorScheme="blue">
      Back
    </Button>
  );

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    return <MarvelDetailItem marvel={data} />;
  };

  return (
    <div className="container">
      {renderHeader()}
      {renderContent()}
    </div>
  );
};

export default MarvelDetail;