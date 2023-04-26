import { SubmitHandler, UseFormRegister } from "react-hook-form";

export interface VinicolaFormProps extends React.HTMLAttributes<HTMLFormElement> {
  name: string;
  description: string;
  image: string;
  wine_tasting: boolean;
  tour: boolean;
  restaurant: boolean;
  hotel: boolean;
  bikes: boolean;
  trakking: boolean;
  viewpoint: boolean;
  cafeteria: boolean;
  playground: boolean;
  accessibility: boolean;
  pool: boolean;
  cable_car: boolean;
  kayak: boolean;
}

export interface WineryFormProps {
  register: UseFormRegister<FormData>;
  handleSubmit: SubmitHandler<FormData>;
  errors: Record<string, any>;
}
