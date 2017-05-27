/*
    Storing values of employee object in array and printing them in console using for-in loop.
    employeeAddress object in nested in employee object
*/

function printEmployeeArray() {

    /* Employee Array */
    var employeeArray = [];
    
    /* 1st Employee */
    employeeArray[0]=  {
        employeeName : "Rakesh Kumar",
        employeeAge : 20,
        employeeSalary : 20000,
        employeeAddress : {
            employeeCity : "Puna",
            employeeState : "Maharashtra",
            employeePincode : 411007
        }
    };

     /* 2nd Employee */
    employeeArray[1]=  {
        employeeName : "John Dsouza",
        employeeAge : 30,
        employeeSalary : 30000,
        employeeAddress : {
            employeeCity : "Mumbai",
            employeeState : "Maharashtra",
            employeePincode : 202020
        }
    };

    /* 3rd Employee */
    employeeArray[2]=  {
        employeeName : "Sunil Korde",
        employeeAge : 35,
        employeeSalary : 35000,
        employeeAddress : {
            employeeCity : "Delhi",
            employeeState : "Delhi",
            employeePincode : 432123
        }
    };

     /* 4th Employee */
    employeeArray[3]=  {
        employeeName : "Ranjan Pandey",
        employeeAge : 40,
        employeeSalary : 40000,
        employeeAddress : {
            employeeCity : "Panjim",
            employeeState : "Goa",
            employeePincode : 403401
        }
    };

     /* 5th Employee */
    employeeArray[4]=  {
        employeeName : "Akbar Khan",
        employeeAge : 45,
        employeeSalary : 45000,
        employeeAddress : {
            employeeCity : "Mumbai",
            employeeState : "Maharashtra",
            employeePincode : 323423
        }
    };

    /* Looping each employee from array */
    for (var loopCounter=0;loopCounter<employeeArray.length;loopCounter++)
    {
        var employee = employeeArray[loopCounter];

        /* extracting each property of employee */
        for (var employeeProperty in employee)
        {
            /* special check to extract employeeaddress since it is nested in employee object */
            if(employeeProperty=="employeeAddress")
            {
                  for (var addressProperty in employee.employeeAddress)
                  {
                        console.log(addressProperty + ":" + employee.employeeAddress[addressProperty]);
                  }       
            }
            else
            {
                console.log(employeeProperty + ":" + employee[employeeProperty]);
            }

        }
        /* empty string to beutify output in console */
        console.log("");
    }
}