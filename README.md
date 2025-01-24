# linguist-WindowsTTS
Add to the "linguist" extension in "Custom TTS Modules" to have native Windows offline TTS

NB:It works well (without modification) even on Ubuntu, use espeak (unfortunately it sounds a robotic voice)

## Dependencies

[linguist](https://github.com/translate-tools/linguist) 

## Change the add on settings
Go to the "Custom TTS Modules" section > Manage Modules > Add 

and copy the contents of my js

If you are Italian change the entry with "Microsoft Cosimo"

## Advice
To also have the offline translation you can use
1) Bergamot, use firefox's built-in offline translator (it is already in the settings of the translation add-on)
2) LibreTranslate offline (change to http:localhost:5000):
[LibreTranslator.js](https://github.com/translate-tools/linguist-translators/blob/master/translators/LibreTranslator.js) 

