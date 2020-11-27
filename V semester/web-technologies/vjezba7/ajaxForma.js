function odradi() {

    var ime = document.getElementsByName("ime")[0].value;
    var prezime = document.getElementsByName("prezime")[0].value;
    var adresa = document.getElementsByName("adresa")[0].value;
    var brtelf = document.getElementsByName("broj_telefona")[0].value;
    $.ajax({
        url: "/z4",
        type: "POST",
        data: {
          objekat : { ime: ime, prezime: prezime, adresa: adresa, broj_telefona: brtelf }
        },
        success: function (data, status, settings) {
        },
        error: function (ajaxrequest, ajaxOptions, thrownError) {
          alert("error");
        }
      });


    var xhr = new XMLHttpRequest();
    const url = "http://localhost:8085/dajPodatkeJson";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);

            var d_nested = document.getElementById("tabela");
            if (d_nested !== null && document.querySelector("body").contains(d_nested)) document.querySelector("body").removeChild(d_nested);

            tbl = document.createElement("table");
            tbl.setAttribute("id", "tabela");

            row = document.createElement("tr");
            cell = document.createElement("th");
            cellText = document.createTextNode("Ime");
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell2 = document.createElement("th");
            cellText2 = document.createTextNode("Prezime");
            cell2.appendChild(cellText2);
            row.appendChild(cell2);
            cell3 = document.createElement("th");
            cellText3 = document.createTextNode("Adresa");
            cell3.appendChild(cellText3);
            row.appendChild(cell3);
            cell4 = document.createElement("th");
            cellText4 = document.createTextNode("Broj telefona");
            cell4.appendChild(cellText4);
            row.appendChild(cell4);
            tbl.appendChild(row);

            for (let i = 0; i < json.length - 1; ++i) {
                row = document.createElement("tr");
                cell = document.createElement("td");
                cellText = document.createTextNode(json[i].ime);
                cell.appendChild(cellText);
                row.appendChild(cell);
                cell2 = document.createElement("td");
                cellText2 = document.createTextNode(json[i].prezime);
                cell2.appendChild(cellText2);
                row.appendChild(cell2);
                cell3 = document.createElement("td");
                cellText3 = document.createTextNode(json[i].adresa);
                cell3.appendChild(cellText3);
                row.appendChild(cell3);
                cell4 = document.createElement("td");
                cellText4 = document.createTextNode(json[i].broj_telefona);
                cell4.appendChild(cellText4);
                row.appendChild(cell4);
                tbl.appendChild(row);
            }
            document.querySelector("body").appendChild(tbl);
        }
    };
    xhr.send();
}