 
	#include<iostream>
	#include<string>
	#include<cctype>
	using namespace std;

	bool isJava(const string& str) {
		for (const auto& x : str) {
			if (isupper(x)) return true;
		}
		return false;
	}

	//C++이 변수인지 "_" 있으면 true
	bool isCpp(const string& str) {
		for (const auto& x : str) {
			if (x == '_') return true;
		}
		return false;
	}

	//neither Cpp nor Java
	bool isError(const string& str) {
		//'_'와 upper chracters 혼재되어 있는지 판단한다.
		bool underbar = false;
		bool upper = false;

		for (const auto& x : str) {
			if (x == '_') underbar = true;
			else if (isupper(x)) upper = true;
		}

		if (underbar && upper) return true; //대문자나 밑줄이 둘 다 있다.

		//첫 문자가 대문자 이거나 '_'인지 파악
		else if (isupper(str[0]) || str[0] == '_') return true;

		//마지막인 '_'인지 판단.
		else if (*(str.end() - 1) == '_') return true;

		//'_'가 연속해서 나오는지
		for (int i = 0; i < str.length() - 1; ++i) {
			if (str[i] == '_' && str[i + 1] == '_') return true;
		}

		//모두 통과하면 error가 아니다.
		return false;
	}

	//Java를 C++로
	string JtoC(const string& var) {
		string str = "";
		for (const auto& x : var) {
			if (isupper(x)) {  //upper case
				str += '_'; // attach "_".
				str += tolower(x); //lower case
			}
			else str += x; //소문자라면 그냥 
		}

		return str;
	}

	string CtoJ(const string& var) {
		string str = "";
		bool changeFlag = false; //대문자로 바꿔야 하는지 판단할 변수

		for (const auto& x : var) {
			if (x == '_') changeFlag = true; // '_'인 경우, 붙이지 않고 다음 문자를 대문자로 붙인다.
			else {
				if (changeFlag) { //대문자로 바꿔야 하면
					str += toupper(x); //바꿔 붙이고
					changeFlag = false;  //rm그다음은 소문자로
				}
				else str += x;
			}
		}
		return str;
	}

	int main() {
		ios_base::sync_with_stdio(false);
		cin.tie(nullptr);

		string varName;

		cin >> varName;

		if (isError(varName))
			cout << "Error!";
		else if (isJava(varName)) {
			cout << JtoC(varName);
		}
		else cout << varName;
	}
