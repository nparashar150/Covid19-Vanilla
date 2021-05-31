#include <stdio.h>
int main()
{
  int times,temp,no[20],i,j;

  printf("Length of Numbers to input: ");
  scanf("%d", &times);
  printf("Enter elements: ");
  for (i = 0; i < times; i++)
    scanf("%d", &no[i]);
  for (i = 1; i < times; i++)
  {
    temp = no[i];
    j = i - 1;
    while ((temp < no[j]) && (j >= 0))
    {
      no[j + 1] = no[j];
      j = j - 1;
    }
    no[j + 1] = temp;
  }

  printf("Sorted list: ");
  for (i = 0; i < times; i++)
    printf(" %d", no[i]);

  return 0;
}
