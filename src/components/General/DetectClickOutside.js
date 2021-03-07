export const detectOutside = {
    methods : {
        // Function needs an element 'id' and a functon to execute in order to work
        detectClickOutside(element,functionToExecute){
            // Contains the element we want to detect the click outside of
            let excludeElement = document.getElementById(element);
            // Event listener on the page
            document.addEventListener('click',function(event){
                // Check if the click target is inside our element or not
                let isClickInside = excludeElement.contains(event.target);

                if(!isClickInside){
                    // The click was outside the element,execute the passed function
                    functionToExecute();
                }
            });
        }
    }
}