import {
  AspectRatio,
  Card,
  CardBody,
  WrapItem,
  Image,
  Text,
  CardHeader,
  Heading,
} from '@chakra-ui/react';
import Link from 'next/link';

import { IMarvel } from '@/modals';

export interface IMarvelItemProps {
  marvel: IMarvel;
}

export function MarvelItem({ marvel }: IMarvelItemProps) {
  return (
    <WrapItem>
      <Link href={`marvel/${marvel.id}`}>
        <Card width={300} height={400} margin={1}>
          <CardBody>
            <AspectRatio ratio={1}>
              <Image
                boxSize="100px"
                objectFit="cover"
                src={marvel.cover_url}
                alt="Dan Abramov"
              />
            </AspectRatio>
            <Text>{marvel.directed_by}</Text>
          </CardBody>
          <CardHeader>
            <Heading size="md">{marvel.title}</Heading>
          </CardHeader>
        </Card>
      </Link>
    </WrapItem>
  );
}
