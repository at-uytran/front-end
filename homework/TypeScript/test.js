var $btnAdd = document.getElementById('js-btnAdd');
var $list = document.getElementById('js-content');
var $input = document.getElementById('js-input');
$btnAdd.className = "btn btn-primary";
$btnAdd.addEventListener('click', function () {
    name = $input.value;
    new Member(name);
});
var Member = (function () {
    function Member(name) {
        this.domEle = document.createElement('li');
        this.name = name;
        this.settingContent(name);
        this.addingButton();
    }
    Member.prototype.settingContent = function (name) {
        if (name === void 0) { name = "Anonymous"; }
        var $span = document.createElement('span');
        $span.innerHTML = this.name;
        // $item = this.domEle;
        this.domEle.appendChild($span);
        console.log($span);
        $list.appendChild(this.domEle);
    };
    Member.prototype.addingButton = function () {
        var $btnDelete = document.createElement('button');
        $btnDelete.textContent = 'delete me';
        $btnDelete.className = "btn btn-danger";
        $btnDelete.addEventListener('click', function (e) {
            $parentElement = e.target.parentNode;
            $list.removeChild($parentElement);
        });
        this.domEle.appendChild($btnDelete);
    };
    return Member;
}());
