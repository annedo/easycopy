Vue.component('copy-button', {
    props: {
        textareaIdList: Array,
        displayText: String
    },
    methods: {
        copyText: function(textareaIdList, event) {
            let button = event.target;
            let textArray = [];

            for (var i = 0; i < textareaIdList.length; i++) {
                // Get <textarea> tags corresponding to ids in array
                let textarea = document.getElementById(textareaIdList[i]);
                textArray.push(textarea.value);

                // If multiple tags, join the text with a line break
                var textCopy = textArray.join('\n---\n\n');

                // Create a temporary <textarea> with final text for copy command
                let tempInput = document.createElement("textarea");
                tempInput.value = textCopy;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
            }

        }
    },
    template: `
    <button 
        type="button" 
        v-on:click="copyText(textareaIdList, $event)">
            {{displayText}}
    </button>`
})

Vue.component('copy-section', {
    props: {
        copyText: String,
        languageId: String
    },
    template: `
    <div>
        <h1>{{languageId}}</h1>
        <textarea 
            :id=languageId
            :value=copyText
             cols="30"
             rows="10">
        </textarea>
        <copy-button
            :textareaIdList=[languageId]
            displayText="Copy"></copy-button>
    </div>
    `
});


var app = new Vue({
    el: '#app',
    data: {
        textVN: "Bảo hiểm sức khỏe sắp hết hạn rồi nhắn tin cho Thủy biết Anh Chị muốn làm gì: Renew? Cancel? \n\n-Thuy Bell 727-280-4563",
        textEN: "Your 2020 health insurance is about to expire. Text Thuy what you want to do: Renew? Cancel? \n\n-Thuy Bell 727-280-4563"
    }
    /*methods: {
        copyText: function(copyIdList, event) {
            let button = event.target;
            let form = document.getElementById(button.getAttribute('form'));
            if (form.checkValidity() == false) {
                button.click()
                return;
            }
            else {
                var text = [];
                for (var i = 0; i < copyIdList.length; i++) {
                    text.push(document.getElementById(copyIdList[i]).innerText);
                }
                console.log(printText);
                var printText = text.join('\n---\n\n')
                let tempInput = document.createElement("textarea")
                tempInput.value = printText;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
            }*/
            /*let textId = button.id.replace("Button", "");
            let text = document.getElementById(textId).innerText;
            let tempInput = document.createElement("textarea")
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);*/
})