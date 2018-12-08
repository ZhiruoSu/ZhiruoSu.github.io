  $(document).ready(function() {
         var items = [];
         var i = 0;
         var airtable_read_endpoint = "https://api.airtable.com/v0/appUDOzeJk8ZKuT4g/Imported%20table?api_key=keysRMqAr4ctpyQFx";
         var dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    items = [];
                        items.push(value.fields.Name);
                        items.push(value.fields.Time);
                        items.push(value.fields.Place);
                        items.push(value.fields.Number);
                        items.push(value.fields.Clicks);
                        items.push(value.fields.People);
                        items.push(value.fields.Ji);
                        items.push(value.fields.Chengjiao);
                        items.push(value.fields.renminbi);

                        dataSet.push(items);
                 }); // end .each
              $("#example").DataTable( {
                  data: dataSet,
                  retrieve: true,
                  columns: [
                      { title: "展览名称",
                        defaultContent:""},
                    { title: "展览时间",
                          defaultContent:""},
                      { title: "展览地点",
                        defaultContent:"" },
                      { title: "展览作品件数",
                        defaultContent:""},
                        { title: "推介公众号点击数",
                          defaultContent:""},
                          { title: "展览参观人次",
                              defaultContent:""},
                              { title: "作品集发售量",
                                  defaultContent:""},
                                  { title: "作品成交量",
                                      defaultContent:""},
                                      { title: "成交额",
                                          defaultContent:""},


                    ],

                    initComplete: function () {
                                this.api().columns().every( function () {
                                    var column = this;
                                    var select = $('<select><option value=""></option></select>')
