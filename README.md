# Tutorial Regular Expression

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Twitter: JoseJ_PR](https://img.shields.io/twitter/url?color=1991DA&label=Twitter%20%40JoseJ_PR&logo=twitter&logoColor=FFFFFF&style=flat-square&url=https%3A%2F%2Ftwitter.com%2FJoseJ_PR)](https://twitter.com/JoseJ_PR)

![Banner](/assets/banner.png)

## Description

This repository contains several examples of how to work with Regular Expressions with JavaScript in NodeJS.

## Shortcuts

Forming Regex

| flag | description |
| -- | ----------- |
| i | Ignore case Flag, ignores the case(uppercase/lowercase) of the input string |
| g | Global Flag, searches for multiple matches instead of stopping at the first match |

Example

```js
/hello/ig
```

Cheat Sheet – Regex Rules

| Escaped characters | description |
| -- | ----------- |
| \d | Any number |
| \w | Any words or number |
| \s | Any white space include tabs, break lines or similar |
| \D | Any character that is not a number |
| \W | Any caracter that is not alphanumeric |
| \S | Any caracter that is not white space |
| [abc] | Any of a, b, or c |
| [^abc] | Not a, b, or c |
| [a-g] | character between a & g |

| Anchors | description |
| -- | ----------- |
| ^abc$ | start / end of the string |
| \b | word boundary|

| Escaped characters | description |
| -- | ----------- |
| \\. \\* \\\ | \ is used to escape special chars. \* matches * |
| \t \n \r | tab, linefeed, carriage return |

## 🌍 Websites of Interest

- [Mozilla Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Mozilla RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Mozilla RegExp.prototype.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [Mozilla RegExp.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/match)
- [Mozilla RegExp.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/search)
- [Digital Fortress | Top 15 Commonly Used Regex](https://digitalfortress.tech/tricks/top-15-commonly-used-regex/)

## 🔥 Running the Examples

```bash
$node ./src/'folder'/'file.js'
```

## 📂 Code scaffolding

```any
/
├── assets 🌈                 # Images Sources.
|   └── ...                   # ...
|   |
├── src 💯
|   ├── basic                 # Basic Regex
|   |   ├── example01         # Comparte characters with 'abc'.
|   |   ├── example02         # Contain any numbers of 0123456789.
|   |   ├── example03         # Contain at least one numbers between 0 and 9.
|   |   ├── example04         # Contain at least one character between a and b.
|   |   ├── example05         # Contain at least one character between A and Z.
|   |   ├── example06         # Contain any number.
|   |   ├── example07         # Contain any character.
|   |   ├── example08         # Compare string with date format.
|   |   ├── example09         # No contain between 0-4.
|   |   ├── example10         # No contain character that isn´t numbers.
|   |   ├── example11         # With one or more numbers.
|   |   ├── example12         # Can contain cero or more numbers.
|   |   ├── example13         # Can contain character l or not.
|   |   ├── example14         # Correct format Date.
|   |   ├── example15         # No case sensitive.
|   |   ├── example16         # String groups.
|   |   ├── example17         # Exec function.
|   |   ├── example18         # Match function.
|   |   ├── example19         # Limit words.
|   |   ├── example20         # Patterns.
|   |   ├── example21         # Start string pattern.
|   |   ├── example22         # End string pattern.
|   |   ├── example23         # Replace function.
|   |   ├── example24         # Search function.
|   |   ├── example25         # Test Emails format.
|   |   └── ...
|   |
|   ├── top-15                # Top 15 Commonly Used Regex
|   |   ├── example01         # Digits | Whole Numbers.
|   |   ├── example02         # Digits | Decimal Numbers.
|   |   ├── example03         # Digits | Whole + Decimal Numbers.
|   |   ├── example04         # Digits | Negative, Positive Whole + Decimal Numbers.
|   |   ├── example05         # Digits | Whole + Decimal + Fractions.
|   |   ├── example06         # Alphanumeric Characters | Alphanumeric without space.
|   |   ├── example07         # Alphanumeric Characters | Alphanumeric with space.
|   |   ├── example08         # Email | Common email Ids.
|   |   ├── example09         # Email | Uncommon email ids.
|   |   ├── example10         # Password Strength | Complex.
|   |   ├── example11         # Password Strength | Moderate.
|   |   ├── example12         # Username | Alphanumeric string.
|   |   ├── example13         # URL | Include http(s) Protocol.
|   |   ├── example14         # URL | Protocol Optional.
|   |   ├── example15         # IP Address | IPv4 address.
|   |   ├── example16         # IP Address | IPv6 address.
|   |   ├── example17         # IP Address | Both IPv4, IPv6 addresses.
|   |   ├── example18         # Dates | YYYY-MM-dd using separator -.
|   |   ├── example19         # Dates | dd-MM-YYYY using separators - or . or /.
|   |   ├── example20         # Dates | dd-mmm-YYYY using separators - or . or /.
|   |   ├── example21         # Time | HH:MM 12-hour.
|   |   ├── example22         # Time | HH:MM 12-hour Meridiems (AM/PM).
|   |   ├── example23         # Time | HH:MM 24-hour with leading 0.
|   |   ├── example24         # Time | HH:MM 24-hour, optional leading 0.
|   |   ├── example25         # Time | HH:MM:SS 24-hour.
|   |   ├── example26         # HTML Tags | Elements with Attributes.
|   |   ├── example27         # JavaScript Handlers | Inline JS handler.
|   |   ├── example28         # JavaScript Handlers | Inline JS handler with element.
|   |   ├── example29         # Slug | Slug.
|   |   ├── example30         # Match Duplicates in a String | Search Duplicates.
|   |   ├── example31         # Phone Numbers | International Phone Numbers.
|   |   ├── example32         # File Path | File Path with Filename and extension.
|   |   ├── example33         # File Path | File Name with extension having 3 chars.
|   |   └── ...
|   └── ...
└── ...
```

## Happy Code

Created with JavaScript, lot of ❤️ and a few ☕️

## This README.md file has been written keeping in mind

- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)