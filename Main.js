// Aws token

aws_access_key_id = "AKIAYVP4CIPPM2KJ23VU"
aws_secret_access_key = "ruM0z6N / QaVWYwwpkUIxYK51URIWVG0A4yGyWWgN"
output = json
region = us - east - 2

// URL token
url_token = "http: //canarytokens.com/tags/images/3kawql1gesu9hk7q98ooqoymf/submit.aspx"

// DNS token
dns_token = "bi9wu6adzc2duzjjc04oitem7.canarytokens.com"

//firebase keys 
var config = {
    apiKey: "AIzaSyBrC-ZbDAAmy2LBtLRpQQw_83BYNRKBMOM",
    authDomain: "angular-auth-firebase.firebaseapp.com",
    databaseURL: "https://angular-auth-firebase.firebaseid",
    projectid: "angular-auth-firebase",
    storageBucket: "angular-auth-firebase.appspot.com",
    messagingSenderId: "1887977871316"
};

//SQl injection 

app.post("/records", (request, response) => {
    const data = request.body;
    const query = `SELECT * FROM health_records WHERE id = (${data.id})`;
    connection.query(query, (err, rows) => {
        if (err) throw err;
        response.json({ data: rows });
    });
});

//XSS

function compute() {
    var opr1 = $('#operation1').val();
    var opr2 = $('#operation2').val();
    var answer = eval(opr1 + ' + ' + opr2);
    $('#answer').text(answer);
}


//Username & Password

username = "abcd"
password = "password"