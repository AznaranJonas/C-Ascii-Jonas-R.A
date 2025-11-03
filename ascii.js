// creador Jonas Rivadeneyara Aznaran
// ASCII ESTÁNDAR (0-127) + MS-DOS vs WINDOWS-1252

// 1. ASCII Estándar (0-127) - SIEMPRE IGUAL
// creador Jonas Rivadeneyara Aznaran
function mostrarASCIIEstandar() {
    const tabla = document.getElementById('ascii-estandar');
    tabla.innerHTML = '';
    
    const caracteresASCII = [
        // 0-31: Caracteres de control
        'NULO', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL',
        'BS', 'TAB', 'LF', 'VT', 'FF', 'CR', 'SO', 'SI',
        'DLE', 'DC1', 'DC2', 'DC3', 'DC4', 'NAK', 'SYN', 'ETB',
        'CAN', 'EM', 'SUB', 'ESC', 'FS', 'GS', 'RS', 'US',
        
        // 32-127: Caracteres imprimibles
        'ESPACIO', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?',
        '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_',
        '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', 'DEL'
    ];
    
    for (let numero = 0; numero <= 127; numero++) {
        const mostrar = caracteresASCII[numero];
        const esControl = numero < 32 || numero === 127;
        
        const hex = numero.toString(16).toUpperCase().padStart(2, '0');
        
        const cuadrito = document.createElement('div');
        cuadrito.className = 'codigo-item';
        cuadrito.classList.add(esControl ? 'control' : 'normal');
        
        cuadrito.title = `ASCII Estándar - Código: ${numero} | Hex: 0x${hex}`;
        
        cuadrito.innerHTML = `
            <div class="numero">${numero}</div>
            <div class="caracter">${mostrar}</div>
            <div class="hex">0x${hex}</div>
        `;
        
        tabla.appendChild(cuadrito);
    }
}

// 2. Solo MS-DOS y Windows-1252
// creador Jonas Rivadeneyara Aznaran
const MARCADOR_CONTROL = '·'; // Puedes cambiarlo por '□', '␠', '⦙', etc.
const versionesExtendidas = {
    dos: {
        nombre: "MS-DOS (OEM 437)",
        descripcion: "🔷 Símbolos de dibujo, flechas, figuras - Para MS-DOS y consolas",
        caracteres: [
            // 128-143
            'Ç', 'ü', 'é', 'â', 'ä', 'à', 'å', 'ç', 'ê', 'ë', 'è', 'ï', 'î', 'ì', 'Ä', 'Å',
            // 144-159
            'É', 'æ', 'Æ', 'ô', 'ö', 'ò', 'û', 'ù', 'ÿ', 'Ö', 'Ü', '¢', '£', '¥', '₧', 'ƒ',
            // 160-175
            'á', 'í', 'ó', 'ú', 'ñ', 'Ñ', 'ª', 'º', '¿', '⌐', '¬', '½', '¼', '¡', '«', '»',
            // 176-191 - Símbolos de dibujo
            '░', '▒', '▓', '│', '┤', '╡', '╢', '╖', '╕', '╣', '║', '╗', '╝', '╜', '╛', '┐',
            // 192-207
            '└', '┴', '┬', '├', '─', '┼', '╞', '╟', '╚', '╔', '╩', '╦', '╠', '═', '╬', '╧',
            // 208-223
            '╨', '╤', '╥', '╙', '╘', '╒', '╓', '╫', '╪', '┘', '┌', '█', '▄', '▌', '▐', '▀',
            // 224-239 - Letras griegas y símbolos
            'α', 'ß', 'Γ', 'π', 'Σ', 'σ', 'μ', 'τ', 'Φ', 'Θ', 'Ω', 'δ', '∞', 'φ', 'ε', '∩',
            // 240-255
            '≡', '±', '≥', '≤', '⌠', '⌡', '÷', '≈', '°', '∙', '·', '√', 'ⁿ', '²', '■', ' '
        ]
    },
    
    windows: {
        nombre: "Windows-1252", 
        descripcion: "🔶 Letras acentuadas, símbolos €, comillas - Para Windows y documentos",
        caracteres: [
            // 128-143
            '€', '', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹', 'Œ', '', 'Ž', '',
            // 144-159
            '', '‘', '’', '“', '”', '•', '–', '—', '˜', '™', 'š', '›', 'œ', '', 'ž', 'Ÿ',
            // 160-175
            ' ', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '­', '®', '¯',
            // 176-191
            '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿',
            // 192-207
            'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï',
            // 208-223
            'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß',
            // 224-239
            'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï',
            // 240-255
            'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'
        ]
    }
};

// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
// creador Jonas Rivadeneyara Aznaran
function mostrarExtension(version, el) {
    const tabla = document.getElementById('ascii-extendido');
    const datos = versionesExtendidas[version];
    
    // creador Jonas Rivadeneyara Aznaran
    // Actualizar botones sin depender de event implícito
    document.querySelectorAll('.controles button').forEach(btn => {
        btn.classList.remove('btn-activo');
    });
    if (el) el.classList.add('btn-activo');
    
    // creador Jonas Rivadeneyara Aznaran
    // Actualizar descripción
    document.getElementById('descripcion-extendido').textContent = datos.descripcion;
    
    // creador Jonas Rivadeneyara Aznaran
    // Mostrar tabla
    tabla.innerHTML = '';
    
    for (let numero = 128; numero <= 255; numero++) {
        const indice = numero - 128;
        let caracter = datos.caracteres[indice];
        
        const hex = numero.toString(16).toUpperCase().padStart(2, '0');
        
        // Lógica de sustitución para mostrar NOMBRES en lugar de puntos/espacios
        let usarNombre = false;
        let textoNombre = '';
        let notaExtra = '';
        
        if (version === 'windows') {
            // En 1252, 0x80–0x9F son controles; varios sin glifo asignado
            if (numero >= 128 && numero <= 159 && (!caracter || caracter === '')) {
                usarNombre = true;
                textoNombre = `CONTROL 0x${hex} (1252)`;
                notaExtra = ' | Control/No asignado (1252)';
            }
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // Si hay vacíos fuera de control, evitamos colapso pero preferimos nombre cuando aplique
            if (!usarNombre && (caracter === undefined || caracter === '')) {
                caracter = '\u00A0';
            }
        } else if (version === 'dos') {
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // creador Jonas Rivadeneyara Aznaran
            // En CP437 el 255 es NBSP; mostrar su NOMBRE
            if (numero === 255) {
                usarNombre = true;
                textoNombre = 'NBSP (CP437)';
                notaExtra = ' | NBSP (espacio no separable)';
            }
            if (!usarNombre && (caracter === undefined || caracter === '')) {
                caracter = '\u00A0';
            }
        }
        
        const cuadrito = document.createElement('div');
        cuadrito.className = 'codigo-item extendido';
        cuadrito.title = `${datos.nombre} - Código: ${numero} | Hex: 0x${hex}${notaExtra}`;
        
        const contenidoCaracter = usarNombre
        ? `<div class="caracter control-name">${textoNombre}</div>`
        : `<div class="caracter">${caracter}</div>`;
        
        cuadrito.innerHTML = `
        <div class="numero">${numero}</div>
        ${contenidoCaracter}
        <div class="hex">0x${hex}</div>
        `;
        
        tabla.appendChild(cuadrito);
    }
}

// creador Jonas Rivadeneyara Aznaran
// Inicializar página
// creador Jonas Rivadeneyara Aznaran
window.onload = function() {
    mostrarASCIIEstandar();
    mostrarExtension('dos'); // Mostrar MS-DOS por defecto
    
    // Reasignar handlers para pasar 'this'
    const botones = document.querySelectorAll('.controles button');
    botones[0].onclick = function() { mostrarExtension('dos', this); };
    botones[1].onclick = function() { mostrarExtension('windows', this); };
};
