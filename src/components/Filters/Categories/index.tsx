import { IconList } from "../IconList";

import { CategoryBox } from "./categoryBox";
import { Container } from './Container';

const Categories = () => {

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {IconList.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;