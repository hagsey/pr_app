
var pr_tmp = Handlebars.compile($("#pr-tmp").html()),
    pr_list_tmp = Handlebars.compile($("#pr-list-tmp").html()),
    name_list_tmp = Handlebars.compile($("#name-list-tmp").html());

Handlebars.registerPartial("pr", $("#pr-tmp").html());



$("#pr-list").append(pr_list_tmp({ collection: collection }));
$("ul[name='name-list']").append(name_list_tmp({ collection: collection }));
