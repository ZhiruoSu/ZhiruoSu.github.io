$(document).ready(function(){
    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appPLKxfznERYZhs1/%E6%A6%82%E5%86%B5?api_key=keysRMqAr4ctpyQFx";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.Opening);
                       items.push(value.fields.Ending);
                       items.push(value.fields.Authers);
                       items.push(value.fields.Numbers);
                       items.push(value.fields.Work_number);
                       items.push(value.fields.Dealing_Authers);
                       items.push(value.fields.Work_names);
                       dataSet.push(items);
                }); // end .each
             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "展览名称",
                       defaultContent:""},
                     { title: "开展时间",
                       defaultContent:"" },
                     { title: "结束时间",
                       defaultContent:""},
                     { title: "参展作者",
                       defaultContent:""},
                      { title: "参观人数",
                         defaultContent:""},
                      { title: "成交作品数",
                        defaultContent:""},
                      { title: "成交作品作者",
                          defaultContent:""},
                      { title: "成交作品名称",
                          defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button
}); // document ready
