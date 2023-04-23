import { IconList } from "../IconList";

import { CategoryBox } from "./CategoryBox";
import { Container } from './Container';


const Categories = () => {

  return (
    <Container>
      <div
        className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer md:w-1/4 lg:w-1/5 xl:w-1/6">
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