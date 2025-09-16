# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         s = sorted(s)
#         s = "".join(s)
#         t = sorted(t)
#         t = "".join(t)
        
#         return s == t
    

def isAnagram(s, t):
    s = sorted(s)
    s = "".join(s)
    t = sorted(t)
    t = "".join(t)

    if (s == t):
        print(f"{s} is an anagram")
    else:
        print("not an anagram")


isAnagram("robed", "bored")