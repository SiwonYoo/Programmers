function solution(n, q, ans) {
    let pos = [];

    ans.forEach(item => {
        if (item === 5) return 1;
    })
    
    if (ans[0] === 4)
    for (let m=0; m<q[0].length-3; m++) {
        for (let k=m+1; k<q[0].length-2; k++) {
            for (let i=k+1; i<q[0].length-1; i++) {
                for (let j=i+1; j<q[0].length; j++) {
                    pos.push([q[0][m], q[0][k], q[0][i], q[0][j]]);
                }
            }
        }
    }
    
    if (ans[0] === 3)
    for (let k=0; k<q[0].length-2; k++) {
        for (let i=k+1; i<q[0].length-1; i++) {
            for (let j=i+1; j<q[0].length; j++) {
                pos.push([q[0][k], q[0][i], q[0][j]]);
            }
        }
    }
    
    if (ans[0] === 2)
    for (let i=0; i<q[0].length-1; i++) {
        for (let j=i+1; j<q[0].length; j++) {
            pos.push([q[0][i], q[0][j]]);
        }
    }
    
    if (ans[0] === 1)
    for (let j=0; j<q[0].length; j++) {
        pos.push([q[0][j]]);
    }
    
            
    let restq = [];
    for (let i=0; i<n; i++) {
        restq.push(i+1);
    }
    restq = restq.filter((item) => !q[0].includes(item));
    
    let revpos = [];
    
    if (ans[0] === 4)
    for (let j=0; j<restq.length; j++) {
        revpos.push([restq[j]]);
    }
    
    if (ans[0] === 3) 
    for (let i=0; i<restq.length-1; i++) {
        for (let j=i+1; j<restq.length; j++) {
            revpos.push([restq[i], restq[j]]);
        }
    }
    
    if (ans[0] === 2)
    for (let k=0; k<restq.length-2; k++) {
        for (let i=k+1; i<restq.length-1; i++) {
            for (let j=i+1; j<restq.length; j++) {
                revpos.push([restq[k], restq[i], restq[j]]);
            }
        }
    }    
    
    if (ans[0] === 1)
    for (let m=0; m<restq.length-3; m++) {
        for (let k=m+1; k<restq.length-2; k++) {
            for (let i=k+1; i<restq.length-1; i++) {
                for (let j=i+1; j<restq.length; j++) {
                    revpos.push([restq[m], restq[k], restq[i], restq[j]]);
                }
            }
        } 
    }
    
    if (ans[0] === 0)
    for (let n=0; n<restq.length-4; n++) {
        for (let m=n+1; m<restq.length-3; m++) {
            for (let k=m+1; k<restq.length-2; k++) {
                for (let i=k+1; i<restq.length-1; i++) {
                    for (let j=i+1; j<restq.length; j++) {
                        revpos.push([restq[n], restq[m], restq[k], restq[i], restq[j]]);
                    }
                }
            } 
        }
    }
            
    let conc = [];
    pos.forEach(qItem => {
        revpos.forEach(revqItem => {
            conc.push(qItem.concat(revqItem));
        })
    })
    
    if (!pos.length) {
        conc = revpos;
    }
    
    conc = conc.filter((item, idx) => {
        let flag = true;
        q.forEach((qItem, qIdx) => {
            if (item.filter(iItem => qItem.includes(iItem)).length !== ans[qIdx]) flag = false;
        })
        return flag;
    });
    
    return conc.length;
}