var $btnAdd = document.getElementById('js-btnAdd');
var $list = document.getElementById('js-content');
var	$input = document.getElementById('js-input');

$btnAdd.className = "btn btn-primary";


$btnAdd.addEventListener('click',function () {
	name = $input.value;
	new Member(name);
});


class Member {
	domEle: any;
	constructor(name: string) {
		this.domEle = document.createElement('li');
		this.name = name;
		this.settingContent(name)
		this.addingButton();
	}
	settingContent(name: string = "Anonymous"){
		let $span = document.createElement('span');
		$span.innerHTML = this.name; 
		// $item = this.domEle;
		this.domEle.appendChild($span);
		console.log($span);
		$list.appendChild(this.domEle);
	}

	addingButton(){
		let $btnDelete = document.createElement('button');
		$btnDelete.textContent = 'delete me';
     		$btnDelete.className = "btn btn-danger";

		$btnDelete.addEventListener('click',(e) =>{
			$parentElement = e.target.parentNode;
			$list.removeChild($parentElement);

		});
		this.domEle.appendChild($btnDelete);

	}

}
