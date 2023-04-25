interface ContainerProps {
  children: React.ReactNode
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return ( 
    <div className="max-w-[100vw] mx-auto xl:px-10 md:px-8 sm:px-4 px-2 mb-6">
      {children}
    </div>
   );
}
 
export { Container };
