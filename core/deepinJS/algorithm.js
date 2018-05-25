// 数据结构
    // Hash--哈希--计数排序--O(n+max)
    // Queue--队列--先进先出
    // Stack--栈--先进后出
    // Linked list--链表--动态的“数组”--表头、节点
    // Tree--树--层级结构
        // 二叉树
            // 满二叉树
            // 完全二叉树
            // 完全二叉树和满二叉树可以用数组来实现
            // 其他树都是用哈希（对象）来实现的
    // Heap--堆--子节点小于父节点（但不一定小于父级节点）的结构








// 排序算法

    // bubble sort--冒泡排序
    // selection sort--选择排序--O(n²)
    // insertion sort--插入排序--扑克牌排序
    // counting sort--计数排序--O(n+max)
        // bucket sort--桶排序
        // radix sort--基数排序--大数字
    // quick sort--快排--极端情况下不快
        // RQ sort--随机快排--O(nlogn)
    // merge sort--归并排序
    // heap sort--堆排序



let arr = [99, -1, 89, 23, 101, 445, 7, 9, 10, -10, 2, 0, 101];

// 找出数组里最小数
function findMin(array){
    let min = array[0];
    for(let i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }
    return min;
}



// 实现数组里的数从小到大排序

    //bubble sort 冒泡排序
    function bubbleSort(array){
        for(let r = 0; r < array.length; r++){
            for(let i = 0; i < array.length - r; i++){
                if(array[i] > array[i+1]){
                    let t = array[i];
                    array[i] = array[i+1];
                    array[i+1] = t;
                }
            }
        }
        return array;
    }


    // counting sort 计数排序--只能实现非负整数范围内的排序，而且浪费桶
    function countingSort(array, max){
        let arrLen = array.length;
        let bucketMax = max;
        let bucket = new Array(max+1);
        //入桶
        for(let i = 0; i < arrLen; i ++){
            if(bucket[array[i]] === undefined){
                bucket[array[i]] = 0;
            }
            bucket[array[i]]++;
        }
        let newArray = [];
        let newIndex = 0;
        //出桶
        for(let i = 0; i < bucketMax + 1; i++){
            while(bucket[i] > 0){
                newArray[newIndex++] = i;
                bucket[i]--;
            }
        }
        return newArray;
    }



function countingSort(a,max){
    

}

    // bucket sort 桶排序--计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。







