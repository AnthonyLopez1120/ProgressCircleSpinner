# Progress Spinner 
No one likes a blank loading screen. This silky-smooth progress spinner will keep your users on your page. Utilize this component to give your users a sense of their upload progress. Housed in React.js, powered by JavaScript, and colored with CSS. 
Check out the demo: https://progressspinner.herokuapp.com/

## Available States using useState
| State Name        | Description           |
| ------------- |:-------------:|
| isOn/setIsOn      | a flag to indicate that loading is in progress. Default false |
| files/setFiles      | can set a dynamic number that corresponds to the number of files someone selects to upload      |
| recipients/setRecipients | can set a dynamic number that corresponds to the number of recipients someone has.      |
| currentUpload/setCurrentUpload | will be used to store the state of the current number of bytes that has transfered.      |
| totalUpload/setTotalUpload | Carries the total file size      |
| remainingTime/setRemainingTime | Carries a calculated value of the remaining time for the upload.      |
