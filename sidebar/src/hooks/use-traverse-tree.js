const useTraverseTree = () => {

    const insertNode = (() => {

        const dp = new Map();

        return (tree, folderId, item, isFolder) => {

            const dpKey = `${tree.id}+${folderId}+${item}+${isFolder}`;

            if (dp.has(dpKey)) {
                return dp.get(dpKey);
            }

            if (tree.id === folderId && tree.isFolder) {
                tree.items.unshift({
                    id: new Date().getTime(),
                    name: item,
                    isFolder,
                    items: []
                })
                dp.set(dpKey, tree);
                return tree;
            }

            let latestNode = tree.items.map((ele) => (
                insertNode(ele, folderId, item, isFolder)
            ));
            const ans = { ...tree, items: latestNode }
            dp.set(dpKey, ans);
            return ans
        }

    })();

    function editNode(tree, folderId, name) {

        if (tree.id === folderId) {
            tree.name = name;
            return tree;
        }

        const latestNode = tree.items.map((ele) => editNode(ele, folderId, name));
        const ans = { ...tree, items: latestNode }

        return ans;
    }

    function deleteNode (tree, folderId) {
        if (tree.items) {
            tree.items = tree.items.filter(item => item.id !== folderId);
            tree.items.forEach(item => deleteNode(item, folderId));
        }
        return tree;
    }

    function deleteTheFuckingNode(tree, folderId) {
        const newTree = { ...tree };
        deleteNode(newTree, folderId);
        return newTree;
    }

    return { insertNode, deleteTheFuckingNode, editNode }

}

export default useTraverseTree;