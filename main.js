// 1.要素を取得
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
// console.log(empties);

// 2.ドラッグのトリガー
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// 4.1つ1つのempty要素を取得
for(const empty of empties) {
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("drop",dragDrop);
}


// 3.ドラッグ関数
function dragStart() {
    console.log("start");
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "invisible";
    }, 0);
}

function dragEnd() {
    console.log("end");
    fill.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
    console.log("over");
}

function dragEnter() {
    this.className += " hovered";
    console.log("enter");
}

function dragLeave() {
    this.className = "empty";
    console.log("lever");
}

function dragDrop() {
    this.className = "empty";
    this.appendChild(fill);
    console.log("drop");
}