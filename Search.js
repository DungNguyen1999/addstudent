$(document).ready(function () {

    function addStudent() {
        const currentHtml = $(".list-student").html();
        const name = $(".student-name").val();
        const code = $(".student-code").val();
        const address = $(".student-address").val();
        const newElement = `
            <tr class="list">
                <td>${name}</td>
                <td>${code}</td>
                <td>${address}</td>
            </tr>
        `;

        const newHtml = currentHtml + newElement;
        
        if (name && code && address) {
            $(".list-student").html(newHtml);
            $(".student-name").val("");
            $(".student-code").val("");
            $(".student-address").val("");
        }
    }

    //   ADD STUDENT

    $(".btn-add").on("click", function () {
        addStudent();
    });
    
    //   SEARCH

    $(".student-search").on("keyup", function () {
        let value = $(this).val();
        $(".list-item").each(function (index) {
            const content = $(this).text();
            if (content.includes(value)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
