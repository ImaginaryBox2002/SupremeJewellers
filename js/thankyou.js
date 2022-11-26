                /*

                  Title: wsWDForms3
                  Author:Jessel Sookha
                  Date: 02 July 2022
                  Code version: JavaScript
                  Availability: Discord > Classes > wede5020

                */
            
window.onload = function(){
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var name = url.searchParams.get("name");
    var email = url.searchParams.get("email");
    var mobile = url.searchParams.get("mobile");
    var deliveryaddress = url.searchParams.get("deliveryaddress");
    var  prod_type = url.searchParams.get("prod_type");
    var enquiry = url.searchParams.get("enquiry");
    
    var complete = "<p><b>" + "We have received the following information from you: </b><br><br><br>" + 
    "<b>" + "Name:          </b> " + name + "<br><br>" +  
    "<b>" + "Email:         </b> " + email + "<br><br>" + 
    "<b>" + "Phone Number:  </b> " + mobile + "<br><br>" + 
    "<b>" + "Delivery Address:  </b> " + deliveryaddress + "<br><br>" +
    "<b>" + "Product Type:  </b> " + prod_type + "<br><br>" +
    "<b>" + "Message:       </b> " + enquiry;
                    + "</p>" 
    complete = complete;
    document.getElementById('tymsg').innerHTML = complete;
}



/*
const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
}
*/