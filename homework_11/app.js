const doc = document;
let rootNode = doc.getElementById(`root`);
let treeNode = doc.createElement(`div`);

createTree = (array, node) => {
    let ul = doc.createElement(`ul`);
    node.appendChild(ul);

    for (let i = 0; i < array.length; i++) {
        let li = doc.createElement(`li`);
        let div = doc.createElement(`div`);
        let icon = doc.createElement(`i`);
        ul.appendChild(li);
        li.appendChild(div);
        icon.classList.add(`material-icons`);
        div.appendChild(icon);
        div.append(array[i].title);

        if (array[i].folder) {
            div.setAttribute(`onclick`, `openFolder(this)`);
            icon.innerHTML = `folder`;
            icon.classList.add(`folder`);

            if (array[i].children) {
                createTree(array[i].children, li);
            } else {
                let emptyUl = doc.createElement(`ul`);
                let emptyLi = doc.createElement(`li`);
                li.appendChild(emptyUl);
                emptyLi.innerHTML = `Folder is empty`;
                emptyLi.classList.add(`empty`);
                emptyUl.appendChild(emptyLi);
            }
        } else {
            icon.innerHTML = `insert_drive_file`;
        }
    }
};

openFolder = (param) => {
    param.parentElement.childNodes[1].classList.toggle(`open`);
    let folder = param.childNodes[0];

    if (folder.innerHTML === `folder`) {
        folder.innerHTML = `folder_open`;
    } else {
        folder.innerHTML = `folder`;
    }
};

createTree(structure, treeNode);
rootNode.appendChild(treeNode);