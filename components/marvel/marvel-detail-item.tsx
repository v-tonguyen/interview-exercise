import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text
} from '@chakra-ui/react';

import { IMarvel } from '@/modals';


export interface IMarvelDetailProps {
  marvel: IMarvel;
}

export function MarvelDetailItem({ marvel }: IMarvelDetailProps) {
  return (
    <Card margin={1}>
      <CardBody>
        <AspectRatio height={500} ratio={1}>
          <iframe
            title="naruto"
            src={marvel?.trailer_url}
            allowFullScreen={true}
          />
        </AspectRatio>
      </CardBody>
      <CardHeader>
        <Heading size="md">{marvel?.title}</Heading>
        <Text>{marvel?.overview}</Text>
      </CardHeader>
    </Card>
  );
}
