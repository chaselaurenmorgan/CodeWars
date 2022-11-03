// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


function DNAtoRNA(dna){
    let rna = ''
    for(let i = 0; i < dna.length; i++){
        if(dna[i]=== 'T'){
            rna += 'u'
        }else {
            rna += dna[i]
        }
    }
    return dna
}


/*
Create a function that takes letter of 'T' and converts it to 'U' 
Return a string of letters and if any of the letters is = 'T' it be replaced by 'U'
Example: 'GCAT' => 'GCAU'  'TTTT' => 'UUUU'  'GCGC' => 'GCGC'
1.Create a function DNAtoRNA with only 1 parameter (string)
2. to check each letter use a for loop 
3. if letter is equal to 'T' return  'U'
4. else return the letter 
*/