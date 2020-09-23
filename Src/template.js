module.exports = templateData => {
    console.log(templateData);
   
    //this will create the variables based on the data in the templateData
    const {a, b, ..c } = templateData;
    return'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;
};