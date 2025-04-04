function CurrentMessage() {
        const day = new Date().getDay();
        if (day >= 1 && day <= 5) {
            return <Workdays />
        }
        return <Weekends />
    }

    function CurrentMessage(props) {
            if (props.day >= 1 && props.day <= 5) {
                return <Workdays />
            }
            return <Weekends />
        }

        function CurrentMessage({day}) {
                const weekday = (day >= 1 && day <= 5);
                const weekend = (day >= 6 && day <= 7);
                let message;
            
                if (weekday) {
                    message = <Workdays />
                } else if (weekend) {
                    message = <Weekends />
                } else {
                    message = <ErrorComponent />
                }
            
                return (
                    <div>
                        {message}
                    </div>
                )
            }


            function LogicalAndExample() {
                    const val = prompt('Anything but a 0')
                
                    return (
                        <div>
                            <h1>Please don't type in a zero</h1>
                            {val &&
                                <h2>Yay, no 0 was typed in!</h2>
                            }
                        </div>
                    )
                }

                true && console.log('This will show')
                false && console.log('This will never show')

    /*   To understand what will be output on screen, consider the following example in standard JavaScript:

    true && console.log('This will show') 
     If you ran this command in the browser’s console, the text ‘This will show’ will be output.
                
    n the flip side, consider the following example:
                

     false && console.log('This will never show')
    If you ran this command, the output will just be the boolean value of false.
    
  In other words, if a prop gets evaluated to true, using the && operator, you can render whatever JSX elements you want to the right of the && operator. */

  function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <LogoutButton />;
      } else {
      return <LoginButton />;
    }

}
/* 
Conditional rendering is built on the same principle. 
By using conditions, you can return different child components. 
This is often done using the props that are passed into the parent component, 
but can also be done based on component state.

Let’s take a look at a simple example.

Let’s say you have two child components called LoginButton and LogoutButton; 
each displaying their corresponding button.

In the parent component, named LogInOutButton, 
you can check the props passed into the parent component and return a different child component based on the value of the props.

In this example, the props contains a property named isLoggedIn. 
When this is set to true, the LogoutButton component is returned. 
Otherwise, the LoginButton component is returned. */

<LogInOutButton isLoggedIn={false} />
/* Then when the LogInOutButton parent component is used, the prop can be passed in. */