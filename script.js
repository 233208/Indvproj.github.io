// Function to fetch CSV data
function fetchCSV() 
{
    // Fetch CSV file
    fetch("MOCK_DATA.csv") // <-----------------------------------------------------------  Write your CSV file name here! If not the function will do a flip
        .then(response => response.text()) // Convert the response into plain text
        .then(data => 
            {
            // Split the data into rows and then split each row into columns
            const rows = data.split("\n").map(row => row.split(","));
            
            // Get the table body element by ID
            const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

            // Iterate over rows up to 10 rows 
            for (let index = 1; index <= 10; index++) 
            {
                // Create a table row element for each row in the CSV
                const tr = document.createElement("tr");

                // Iterate over columns in the current row (FOR LOOP IN A FOR LOOP)
                for (let columnIndex = 0; columnIndex < rows[index].length; columnIndex++) 
                {
                    // Create a table cell for each column and import the data
                    const td = document.createElement("td");
                    td.textContent = rows[index][columnIndex].trim();
                    tr.appendChild(td); // Add the created cell to the current row
                }

                // Add the created row to the table body
                tableBody.appendChild(tr);
            }
        })
        .catch(error => console.error("Error fetching CSV data:", error)); // Log an error if fetching fails
}

// If you have any questions fell free to ask!
// And finaly call the function to fetch CSV data and import it to the table
fetchCSV();

