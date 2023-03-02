import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { MarvelList } from '@/components/marvel';
import { ECategory } from '@/modals';

const Home = () => {
  const [category, setCategory] = useState<ECategory>(ECategory.SHOW);

  const handleOnchangeCategory = (value: ECategory) => setCategory(value);

  const renderMenu = () => (
    <RadioGroup onChange={handleOnchangeCategory} value={category}>
      <Stack direction="row">
        {Object.values(ECategory).map((categoryKey) => (
          <Radio key={categoryKey} value={categoryKey}>
            {categoryKey}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );

  const renderList = () => <MarvelList category={category} />;

  return (
    <div className="container">
      {renderMenu()}
      {renderList()}
    </div>
  );
};

export default Home;
