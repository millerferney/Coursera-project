
/* App (ContextProvider) > A > B > C */

/* const App = () => {
    return (
       <AppContext.Provider>
         <ComponentA />
       </AppContext.Provider>
     );
    };
    
    const ComponentA = () => <ComponentB />;
    const ComponentB = () => <ComponentC />;
    const ComponentC = () => null; */

   /*  const App = () => {
        return (
           <AppContext.Provider>
             <ComponentA />
           </AppContext.Provider>
         );
        };
        
        const ComponentA = React.memo(() => <ComponentB />);
        const ComponentB = () => <ComponentC />;
        const ComponentC = () => null; */

/*         const App = () => {
              const value = {a: 'hi', b: 'bye'};
              return (
                <AppContext.Provider value={value}>
                  <ComponentA />
                </AppContext.Provider>
              );
            };
            
            const ComponentA = React.memo(() => <ComponentB />);
            const ComponentB = () => <ComponentC />;
            const ComponentC = () => {
              const contextValue = useContext(AppContext);
              return null;
            }; */

            const App = () => {
                  const a = 'hi';
                  const b = 'bye';
                  const value = useMemo(() => ({a, b}), [a, b]);
                
                  return (
                    <AppContext.Provider value={value}>
                      <ComponentA />
                    </AppContext.Provider>
                  );
                };
                
                const ComponentA = React.memo(() => <ComponentB />);
                const ComponentB = () => <ComponentC />;
                const ComponentC = () => {
                  const contextValue = useContext(AppContext);
                  return null;
                };