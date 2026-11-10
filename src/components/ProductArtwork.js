import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const illustrations = {
  rice: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="18" fill="#F4EBDD"/>
    <path d="M38 30 Q60 20 82 30 L88 91 Q60 105 32 91 Z" fill="#D9B77A" stroke="#9B7540" stroke-width="3"/>
    <path d="M38 42 Q60 52 82 42" fill="none" stroke="#9B7540" stroke-width="2"/>
    <path d="M47 31 Q60 10 73 31" fill="#FFF8E8" stroke="#9B7540" stroke-width="2"/>
    <g fill="#FFFDF5"><ellipse cx="48" cy="60" rx="3" ry="5"/><ellipse cx="60" cy="55" rx="3" ry="5"/><ellipse cx="70" cy="64" rx="3" ry="5"/><ellipse cx="55" cy="75" rx="3" ry="5"/></g>
    <text x="60" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#684D2D">BERAS</text>
  </svg>`,

  oil: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="18" fill="#FFF3D7"/>
    <rect x="49" y="17" width="22" height="12" rx="3" fill="#D18A16"/>
    <path d="M45 29 L75 29 L81 42 L84 94 Q60 103 36 94 L39 42 Z" fill="#F5B938" stroke="#B77A13" stroke-width="3"/>
    <path d="M41 57 Q60 49 79 57 L81 87 Q60 94 39 87 Z" fill="#FFE08A"/>
    <text x="60" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#80520A">MINYAK</text>
    <text x="60" y="84" text-anchor="middle" font-size="9" fill="#80520A">1 L</text>
  </svg>`,

  sugar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="18" fill="#F5ECFF"/>
    <path d="M37 35 L83 35 L88 94 Q60 102 32 94 Z" fill="#E9D8FF" stroke="#9975BD" stroke-width="3"/>
    <path d="M37 35 Q60 22 83 35" fill="#FFF" stroke="#9975BD" stroke-width="3"/>
    <g fill="#FFF"><rect x="44" y="49" width="13" height="13" rx="2"/><rect x="62" y="48" width="13" height="13" rx="2"/><rect x="53" y="67" width="13" height="13" rx="2"/></g>
    <text x="60" y="91" text-anchor="middle" font-size="9" font-weight="bold" fill="#694B8B">GULA</text>
  </svg>`,

  milk: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="18" fill="#E8F4FF"/>
    <path d="M43 30 L77 30 L84 44 L84 96 L36 96 L36 44 Z" fill="#FFF" stroke="#6C9FCB" stroke-width="3"/>
    <path d="M43 30 L49 17 L71 17 L77 30" fill="#D8ECFF" stroke="#6C9FCB" stroke-width="3"/>
    <rect x="39" y="54" width="42" height="27" rx="5" fill="#77B8E8"/>
    <text x="60" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFF">SUSU</text>
    <text x="60" y="76" text-anchor="middle" font-size="8" fill="#FFF">UHT 1 L</text>
  </svg>`,

  bread: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="18" fill="#FFF0E2"/>
    <path d="M30 65 Q26 36 47 32 Q60 20 73 32 Q94 36 90 65 L86 91 Q60 101 34 91 Z" fill="#D99A51" stroke="#9D602C" stroke-width="3"/>
    <path d="M39 64 Q38 43 52 42 Q60 35 68 42 Q82 43 81 64" fill="#F8D7A8"/>
    <path d="M40 72 Q60 80 80 72" fill="none" stroke="#B87938" stroke-width="2"/>
    <text x="60" y="89" text-anchor="middle" font-size="9" font-weight="bold" fill="#75451F">ROTI</text>
  </svg>`,

  eggs: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="18" fill="#FCEBE8"/>
    <path d="M28 68 L92 68 L86 94 Q60 105 34 94 Z" fill="#D78C65" stroke="#9C5B3C" stroke-width="3"/>
    <g fill="#FFF9ED" stroke="#C6A77C" stroke-width="2"><ellipse cx="43" cy="58" rx="12" ry="17"/><ellipse cx="60" cy="51" rx="12" ry="17"/><ellipse cx="77" cy="58" rx="12" ry="17"/></g>
    <path d="M34 76 Q60 84 86 76" fill="none" stroke="#9C5B3C" stroke-width="2"/>
    <text x="60" y="92" text-anchor="middle" font-size="9" font-weight="bold" fill="#75452F">TELUR</text>
  </svg>`
};

export default function ProductArtwork({ type, size = 68 }) {
  return (
    <View style={[styles.box, { width: size, height: size }]}>
      <SvgXml
        xml={illustrations[type] || illustrations.rice}
        width="100%"
        height="100%"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#F4F6FA',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
