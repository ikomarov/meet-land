export function makeSlug(title: string): string {
    let transliterated = transliterate(title);
    return transliterated
        .toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function transliterate(word: string): string {
    const a: { [key: string]: string } = {
        'ж': 'zh', 'ч': 'ch', 'щ': 'shch', 'ш': 'sh', 'ю': 'yu', 'я': 'ya',
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
        'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
        'х': 'h', 'ц': 'c', 'ъ': '', 'ь': '', 'э': 'e'
    };
    return word.split('').map((char) => {
        return a[char] || a[char.toLowerCase()] === undefined && char || a[char.toLowerCase()].replace(/^(.)/, (match) => match.toUpperCase());
    }).join("");
}
