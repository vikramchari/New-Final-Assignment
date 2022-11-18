// Javascript file for PB-13 


// Function to edit the given data
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 
}

// Function to save the details
function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 

 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="none";
}
// Function to delete the row
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
// Function to add new Row to the data
function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length);
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td><input class= 'edit-button' type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 
}