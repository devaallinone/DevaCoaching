document.getElementById('payButton').addEventListener('click', function() {
    
});



/////////////////////////
function CourseRegistrationHandler(){
    
    console.log('course ');
}
function DemoShowHandler(){
    console.log(' demo ');
}
function letsgo(){
    
}
function enrollNow(id){
    let item = document.getElementById('modalContent');
    console.log(id,document.getElementById("modalContent").innerHTML);
    let str='';
    let amount = 0;
    if(id == "webd"){
        console.log('6');
        amount = 1999;
        str+=`<h4>HTML , CSS , JAVASCRIPT</h4>
        <p>1 month training + Hands-on practice</p>
        <p style="color:red">Batch start from 1st of July 2024</p>
        <p>Price : <span class="cross" style:"text-decoration: line-through;"> 11999</span><b> 1999 RS. </b> Only </p><u> <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeFW-Mc5T4QAVWUTt_35jE-e1OHYR9F4T0U6WJyH1E2WUJwqQ/viewform?usp=sf_link" target="_blank" style="color: green;">Visit/CallBack Request</a></u>`
    }else if(id == "c-cpp"){
        console.log('5');
        amount = 2999;
        str+=`<h4>C/C++/JAVA/DSA</h4>
        <p>1 month training + Hands-on practice</p>
        <p style="color:red">Batch start from 1st of July 2024</p>
        <p>Price : <span class="cross" style:"text-decoration: line-through;"> 10000</span><b> 2999 RS.</b> Only </p><u> <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeFW-Mc5T4QAVWUTt_35jE-e1OHYR9F4T0U6WJyH1E2WUJwqQ/viewform?usp=sf_link" target="_blank" style="color: green;">Visit/CallBack Request</a></u>`
    }else if(id == "marketing"){
        console.log('4');
        amount = 4999;
        str+=`<h4>SALESFORCE MARKETING CLOUD EMAIL SPECIALIST</h4>
              <p>1 month training + Hands-on practice</p>
              <p style="color:red">Batch start from 1st of July 2024</p>
              <p>Price : <span class="cross" style:"text-decoration: line-through;"> 12999</span><b> 4999 RS. </b>Only </p><u> <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeFW-Mc5T4QAVWUTt_35jE-e1OHYR9F4T0U6WJyH1E2WUJwqQ/viewform?usp=sf_link" target="_blank" style="color: green;">Visit/CallBack Request</a></u>`
    }else if(id == "admin-developer"){
        console.log('3');
        amount = 14999;
        str+=`<h4>SALESFORCE ADMINISTRATOR + DEVELOPER + LWC</h4>
              <p>3 month training + Hands-on practice</p>
              <p style="color:red">Batch start from 1st of July 2024</p>
              <p>Price : <span class="cross" style:"text-decoration: line-through;"> 42000</span> <b>14999 RS.</b> Only</p><u> <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeFW-Mc5T4QAVWUTt_35jE-e1OHYR9F4T0U6WJyH1E2WUJwqQ/viewform?usp=sf_link" target="_blank" style="color: green;">Visit/CallBack Request</a></u>`
    }else if(id == "developer"){
        console.log('2');
        amount = 7999;
        str+=`<h4>SALESFORCE DEVELOPER</h4>
        <p>2 month training + Hands-on practice</p>
        <p style="color:red">Batch start from 1st of July 2024</p>
        <p>Price : <span class="cross" style:"text-decoration: line-through;"> 24999</span><b> 7999 RS.</b> Only </p><u> <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeFW-Mc5T4QAVWUTt_35jE-e1OHYR9F4T0U6WJyH1E2WUJwqQ/viewform?usp=sf_link" target="_blank" style="color: green;">Visit/CallBack Request</a></u>`
    } else if(id == "admin"){
        console.log('1');
        amount = 5999;
        str+=`<h4>SALESFORCE ADMINISTRATOR</h4>
              <p>1 month training + Hands-on practice</p>
              <p style="color:red">Batch start from 1st of July 2024</p>
              <p>Price : <span class="cross" style:"text-decoration: line-through;"> 15999</span><b> 5999 RS.</b> Only</p>
              <u> <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeFW-Mc5T4QAVWUTt_35jE-e1OHYR9F4T0U6WJyH1E2WUJwqQ/viewform?usp=sf_link" target="_blank" style="color: green;">Visit/CallBack Request</a></u>`

    }
    item.innerHTML=str;
   
    if (!amount) {
        alert('Please enter an amount');
        return;
    }

    // Your UPI ID (change it to your actual UPI ID)
    const upiId = '6376598200@axl';
    
    // Generate the UPI payment URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}&cu=INR`;

    // Clear any existing QR code
    document.getElementById('qrcode').innerHTML = '';

    // Generate QR code
    new QRCode(document.getElementById('qrcode'), upiUrl);
}
function DemoNow(id){
    console.log(id);
}