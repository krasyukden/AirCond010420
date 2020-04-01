Class Air conditioning
	State
		_name: String
		_status: Boolean
		_temperature: Number // (15 <= _temperature <= 35)
      _modes: [String]
      _currentMode: Number
	Behavior
      getName(): String
      
		getStatus(): Boolean
		on(): void
		off(): void
		
      increaseTemperature(): void
		decreaseTemperature(): void
		setTemperature(Number): void
      getTemperature(): Number

      getModes(): [String]
      getMode(): String
      setMode(String): void
      addMode(String): void
      nextMode(): void
      previousMode(): void
	  _isCorrectTemperature(Number): Boolean // new

/*cool (переводится «охлаждение») – обозначено снежинкой;
heat (для обогрева) со значком солнышка;
режим dry (режим осушения в любом кондиционере) c изображением капли;
fan (вентиляция) со значком вентилятора;*/

