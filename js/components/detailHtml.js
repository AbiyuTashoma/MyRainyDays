function createAttribute (attributelist, attributeName) {
    let html = "";

    if (attributelist.length > 0) {
        for (let j = 0; j < attributelist.length; j++) {
            if (attributelist[j]["name"] == attributeName) {
                for (let i = 0; i < attributelist[j]["options"].length; i++) {
                    html += `<option value="${attributelist[j]["options"][i]}">${attributelist[j]["options"][i]}`;
                }
            }
        }
            
    }
    

    else {
        html = `<option value="none" disabled selected>none</option>`;
    }

    return html;
}