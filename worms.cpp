#include <bits/stdc++.h>
 
using namespace std;

int main() {
    int n, m, t, soma(0);
    cin >> n;
    int c[n];

    for (int i = 0; i < n; i++) {
        cin >> t;
        soma += t;
        c[i] = soma;
    }

    int ind(0), w[soma + 1];
    
    for (int i = 1; i <= soma; i++) {
        if(i > c[ind]) {
            ind++;
        }

        w[i] = ind + 1;
    }
    
    cin >> m;

    for (int i = 0; i < m; i++) {
        cin >> t;
        cout << w[t] << endl;
    }
}