#include<iostream>

using namespace std;

main(){
	
	int n;
	int box;
	int s = 5;
	
	cin >> n;
	
//	box = n > 16 ? "Goimon idej bolno" : "Goimon idej bolohgui";
	box = n > 16 && n < 25 ? s * 5 : s / 5;
	
	cout << box << endl;
	
	return 0;
}
