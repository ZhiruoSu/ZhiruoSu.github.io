$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/apptrPcDU5V939jUc/2018%E4%B8%8A%E5%8D%8A%E5%B9%B4%E6%94%B6%E5%85%A5%E5%89%8D%E5%8D%81%E6%B8%B8%E6%88%8F?api_key=keysRMqAr4ctpyQFx";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.游戏名称);
                       items.push(value.fields.开发商);
                       items.push(value.fields.国服上线时间);
                       items.push(value.fields.游戏类型);
                       items.push(value.fields.收费方式);
                       items.push(value.fields.画面类型);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Name",
                       defaultContent:""},
                     { title: "Stage",
                         defaultContent:"" },
                     { title: "Completed",
                       defaultContent:"" },
                     { title: "Time Estimated",
                       defaultContent:""},
                     { title: "Weight Factor",
                         defaultContent:""},
                     { title: "Converted",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#roll_up").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/apptrPcDU5V939jUc/2018%E4%B8%8A%E5%8D%8A%E5%B9%B4%E6%94%B6%E5%85%A5%E5%89%8D%E5%8D%81%E6%B8%B8%E6%88%8F?api_key=keysRMqAr4ctpyQFx";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.Name);
                      table1_items.push(value.fields.Developer);
                      table1_items.push(value.fields.Apple_Releasing_Time_in_China);
                      table1_items.push(value.fields.Type);
                      table1_items.push(value.fields.Way_Of_Charging);
                      table1_items.push(value.fields.Display_Type);
                      table1_items.push(value.fields.Number_Of_Comments);
                      table1_items.push(value.fields.Rank);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Developer",
                      defaultContent:"" },
                    { title: "Releasing Time in China(ios)",
                      defaultContent:""},
                    { title: "Type",
                        defaultContent:""},
                    { title: "Way Of Charging",
                      defaultContent:""},
                      { title: "2D/3D/2.5D",
                        defaultContent:""},
                        { title: "Number Of Comments",
                          defaultContent:""},
                          { title: "Rank",
                            defaultContent:""},
                ]
            } );
       }); // end .getJSON

         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/apptrPcDU5V939jUc/2018%E4%B8%8A%E5%8D%8A%E5%B9%B4%E6%94%B6%E5%85%A5%E5%89%8D%E5%8D%81%E6%B8%B8%E6%88%8F?api_key=keysRMqAr4ctpyQFx";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Year);
                        table2_items.push(value.fields.Actual_Revenue);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);
                $('#table2').DataTable( {
                    data: table2_dataSet,
                    retrieve: true,
                    columns: [
                        { title: "Year",
                          defaultContent:""},
                        { title: "Actual Revenue of Mobile Gaming in China",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready
